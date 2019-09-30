export default {
  "Order new code": [
    {
      id: "firstName",
      label: "First name",
      required: true,
      type: "text",
      onPageChange: val => !val && "This field is required"
    },
    {
      id: "lastName",
      label: "Last name",
      required: true,
      type: "text",
      onPageChange: val => !val && "This field is required"
    },
    {
      id: "email",
      label: "E-mail",
      required: true,
      type: "email",
      onPageChange: val => !val && "This field is required"
    },
    {
      id: "pin",
      label: "PIN",
      required: true,
      type: "Text",
      maxLength: 8,
      onPageChange: val => !val && "This field is required"
    },
    {
      id: "password",
      required: true,
      label: "Password",
      type: "password",
      register: true,
      onPageChange: val => !val && "This field is required"
    },
    {
      id: "idNumber",
      required: true,
      label: "ID Card's Number",
      type: "Text",
      onPageChange: val => !val && "This field is required"
    },
    {
      id: "address",
      label: "Delivery address",
      type: "address",
      onPageChange: val => !val && "This field is required"
    },
    {
      id: "phone",
      label: "Phone number",
      type: "phone",
      country: "dz",
      onPageChange: val => !val && "This field is required"
    },
    {
      id: "products",
      label: "Choose Products",
      type: "imageEnum",
      options: [
        {
          src: "static/img/Bracelet.png",
          value: "bracelet",
          label: "Bracelet"
        },
        {
          src: "static/img/Shoetag.jpg",
          value: "shoe_tag",
          label: "Shoe tag"
        },
        {
          src: "static/img/Walletcard.jpg",
          value: "key_chain",
          label: "Key chain"
        },
        {
          src: "static/img/Keychain.jpg",
          value: "wallet_card",
          label: "Wallet card"
        }
      ]
    }
  ]
};
