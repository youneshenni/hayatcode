import { useLazyQuery } from "@apollo/react-hooks"
import React, { useState, useEffect } from "react"
import Select from "react-select/async"
import { gql } from "apollo-boost"
import { client } from "../../Provider"
import Postal from "./Postal"
import Phone from "./Phone"

export default function Localization(props) {
  const [country, setCountry] = useState({})
  const [region, setRegion] = useState({})
  const [city, setCity] = useState("")
  const [postal, setPostal] = useState("")
  const handleCountryChange = ({ id, value }) => setCountry({ id, value })
  const handleRegionChange = ({ id, value }) => setRegion({ id, value })
  const handleCityChange = ({ id, value }) => {
    setCity({ id, value })
  }
  const handlePostalChange = async event => {
    event.persist()
    setPostal(event.target.value)
  }
  const handlePhoneChange = async value => {
    console.log(postal, country, region.value, city.value, value)
    props.onChange({
      zip: postal,
      country: country.id,
      region: region.id,
      city: city.id,
      phone: value,
    })
  }

  const [
    getCities,
    {
      data: cityData,
      loading: cityLoading,
      error: cityError,
      refetch: refetchCities,
    },
  ] = useLazyQuery(
    gql`
      query CitiesList($input: String!, $region: Int!) {
        citiesList(regionID: $region, q: $input) {
          id
          name
        }
      }
    `
  )

  const loadCountries = input =>
    new Promise(resolve =>
      client
        .query({
          query: gql`
            {
              countriesList (q: "${input}") {
                id
                name
                code
              }
            }
          `,
        })
        .then(res =>
          resolve(
            res.data.countriesList.map(({ id, name, code }) => ({
              label: name,
              value: code,
              id,
            }))
          )
        )
    )

  const loadRegions = input =>
    new Promise(resolve =>
      client
        .query({
          query: gql`
        {
          regionsList (countyID: ${Number(country.id)}, q: "${input}") {
            name
            id
          }
        }`,
        })
        .then(res =>
          resolve(
            res.data.regionsList.map(({ id, name, code }) => ({
              label: name,
              value: code,
              id,
            }))
          )
        )
    )

  const loadCities = input =>
    new Promise(resolve =>
      client
        .query({
          query: gql`
      {
        citiesList (regionID: ${Number(region.id)}, q: "${input}") {
          name
          id
        }
      }`,
        })
        .then(res =>
          resolve(
            res.data.citiesList.map(({ id, name }) => ({
              label: name,
              value: id,
              id,
            }))
          )
        )
    )

  return (
    <div>
      <Select
        cacheOptions
        loadOptions={loadCountries}
        defaultOptions
        placeholder="Country"
        onChange={handleCountryChange}
      />
      {country.id && (
        <Select
          cacheOptions
          loadOptions={loadRegions}
          key={country.id}
          placeholder="Region"
          defaultOptions
          onChange={handleRegionChange}
        />
      )}
      {region.id && (
        <Select
          cacheOptions
          key={region.id}
          loadOptions={loadCities}
          defaultOptions
          placeholder="City"
          onChange={handleCityChange}
        />
      )}
      {country.id && (
        <Postal
          {...props}
          country={country.value}
          onChange={handlePostalChange}
          label="ZIP Code"
        />
      )}
      {country.id && (
        <Phone
          {...props}
          country={country.value}
          onChange={handlePhoneChange}
          label="Main Phone"
        />
      )}
    </div>
  )
}
