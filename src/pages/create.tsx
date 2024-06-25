import Form from "../components/product-form"

const CreatePage = ({ handleSubmit, handleNameChange, handlePriceChange }: any) => {
  return (
    <div className="flex justify-center w-full">
      <Form />
    </div>
  )
}

export default CreatePage
