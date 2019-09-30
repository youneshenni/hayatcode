import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import React, { useState, useEffect } from "react";
import Select from "react-select/async";
import { gql } from "apollo-boost";

export default function ActiviteCommerciale(props) {
    
    const handlePhoneChange = async value =>
    props.onChange({
      localization: {
        zip: postal,
        country,
        region: region.code,
        city,
        phone: value
      }
    });
  const {
    data: countryData,
    loading: countryLoading,
    error: countryError,
    refetch: refetchCountries
  } = useQuery(
    gql`
      query CountriesList($input: String!) {
        countriesList(q: $input) {
          name
          code
        }
      }
    `,
    {
      variables: {
        input: ""
      }
    }
  );

  const [
    getRegions,
    {
      data: regionData,
      loading: regionLoading,
      error: regionError,
      refetch: refetchRegions
    }
  ] = useLazyQuery(
    gql`
      query RegionsList($input: String!, $country: String!) {
        getRegionsByCountryCode(countyCode: $country, q: $input) {
          id
          name
          code
        }
      }
    `
  );

  const [
    getCities,
    {
      data: cityData,
      loading: cityLoading,
      error: cityError,
      refetch: refetchCities
    }
  ] = useLazyQuery(
    gql`
      query CitiesList($input: String!, $region: Int!) {
        citiesList(regionID: $region, q: $input) {
          id
          name
        }
      }
    `
  );

  const loadCountries = input =>
    new Promise(resolve =>
      refetchCountries({ input }).then(res =>
        resolve(
          res.data.countriesList.map(({ name, code }) => ({
            label: name,
            value: code
          }))
        )
      )
    );

  const loadRegions = input =>
    new Promise(resolve =>
      refetchRegions({ country, input }).then(res =>
        resolve(
          res.data.getRegionsByCountryCode.map(({ name, code, id }) => ({
            label: name,
            value: { code, id }
          }))
        )
      )
    );

  const loadCities = input =>
    new Promise(resolve =>
      refetchCities({ region: Number(region.id), input }).then(res =>
        resolve(
          res.data.citiesList.map(({ name, id }) => ({
            label: name,
            value: id
          }))
        )
      )
    );

  useEffect(() => {
    getRegions({ variables: { input: "", country } });
  }, [country]);

  useEffect(() => {
    if (region)
      getCities({ variables: { input: "", region: Number(region.id) } });
  }, [region.id]);

  return (
    <div>
      <Select
        cacheOptions
        loadOptions={loadCountries}
        defaultOptions
        placeholder="Country"
        onChange={handleCountryChange}
      />
      {country && (
        <Select
          cacheOptions
          loadOptions={loadRegions}
          key={country}
          placeholder="Region"
          defaultOptions
          onChange={handleRegionChange}
        />
      )}
      {region && (
        <Select
          cacheOptions
          key={region.id}
          loadOptions={loadCities}
          defaultOptions
          placeholder="City"
          onChange={handleCityChange}
        />
      )}
      {country && (
        <Postal
          {...props}
          country={country}
          onChange={handlePostalChange}
          label="ZIP Code"
        />
      )}
      {country && (
        <Phone
          {...props}
          country={country}
          onChange={handlePhoneChange}
          label="Main Phone"
        />
      )}
    </div>
  );
}
