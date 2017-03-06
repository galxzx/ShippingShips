

export default function (values) {
  const error = {}
  if (!values.name) {
    error.name = 'Required'
  }
  if (!values.streetAddress) {
    error.streetAddress = 'Required'
  }
  if (!values.city) {
    error.city = 'Required'
  }
  if (!values.state) {
    error.state = 'Required'
  }
  if (!values.zipcode) {
    error.zipcode = 'Required'
  }
  console.log('Errors======>', error)
  return error
}
