import { Link } from "react-router-dom"
import CustomButton from "../../components/CustomButton/CustomButton"
import CustomInput from "../../components/CustomInput/CustomInput"
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Formik, Form } from 'formik'
import { newsletterValidationSchema } from "../../constants/newsletterValidation"
import { addEmailToNewsletter } from "../../services/newsletter.service"

const Newsletter = () => {
  return (
    <section className="container h-[300px] flex justify-center align-center flex-col mx-auto rounded-[5px] bg-base-bluebackground">
        <div className="w-full md:w-[48rem] pt-[5px] pb-[15px] px-[30px] md:pt-[30px] md:pb-[30px] md:px-[120px]">
            <p className="text-main-white text-heading-2 md:text-heading-3">
                Yes!
            </p>
            
            <p className="text-main-white text-heading-2 md:text-heading-3">
                Send me exclusive offers, unique gift ideas, and personalized tips for shopping and sellling on Commerce.
            </p>
        </div>
            <Formik
            initialValues={{
                email: ''
            }}
            validationSchema={newsletterValidationSchema}
            onSubmit={async (values) => {
                await addEmailToNewsletter(values.email);
                values.email = ''
            }}
            >
            {({ handleSubmit, values, handleChange, errors, touched }) => (
                <>
                <Form className="container w-max p-[9px] mx-auto flex justify-center items-center bg-main-white rounded-full">
                    <CustomInput
                        className={"text-body-1 text-typography-subtext md:w-[30rem] h-[30px] md:pl-[20px] focus:outline-none"}
                        disabled={false}
                        name={'email'}
                        onChange={handleChange}
                        value={values.email}
                        placeholder={'Drop your email'}
                        type={'text'}
                    >
                        <CustomButton 
                            styles="text-body-2 bg-main-primary hover:bg-main-third text-white px-6 py-2"
                            onClick={handleSubmit}
                        >
                            <span>
                                Subscribe
                            </span>
                            <AiOutlineArrowRight className="ml-[6px] w-4 h-4"/>
                        </CustomButton>
                    </CustomInput>
                </Form>
                {errors.email && touched.email ? (
                    <span className="container flex justify-center text-red-500 text-body-5 pt-2">{errors.email}</span>
                  ) : null}
                </>
            )}
            </Formik>

        <div className="flex items-center justify-center pt-[10px]">
            <Link to="/" className="text-main-light underline text-[14px]">
                First order only. You're ready?
            </Link>
        </div>

    </section>
  )
}

export default Newsletter