

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
  } else if (values.state.length !== 2){
    error.state = 'Please use two letter abbreviation for State'
  }
  if (!values.zipcode) {
    error.zipcode = 'Required'
  }else if(typeof Number(zipcode) !== 'number'){
    error.zipcode = "Zipcode must be a number"
  }
  console.log('Errors======>', error)
  return error
}
