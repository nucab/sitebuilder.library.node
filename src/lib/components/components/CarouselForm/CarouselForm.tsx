import * as React from "react";
import {
  FormGroup,
} from "reactstrap";
import { Formik, Field, Form, FormikActions } from "formik";
import { Button } from "@blueprintjs/core";
import AuthContext from "../../../../../components/auth-context";
import ImageElement from "./ImageElement";
import { Styles, CarouselOptions, CarouselNode, CarouselItemNodeAttributes } from "sitebuilder.client";
import Collapsible from "../../../../../components/Collapsible";
// import { merge } from "lodash";

interface IProps {
  data: Styles | null;
  carousel: CarouselNode | null | any;
  onClose: () => void;
}

interface FormValues {
  items: CarouselItemNodeAttributes[];
  options: CarouselOptions;
}

interface Istate {
  newImageValue: string;
}

class CarouselForm extends React.Component<IProps, any> {
  static contextType = AuthContext;
  context!: React.ContextType<typeof AuthContext>;

  constructor(props: any) {
    super(props);
    this.state = {
      newImageValue: "",
    }
  }

  handleAddImage = (url: string, items: any) => {
    items.push({ src: url, altText: `Alt-text` });
    this.setState({ newImageValue: url });
  }

  render() {

    console.log(this.props.carousel.attributes);
    const { carousel: { attributes } } = this.props;
    const { data } = this.props;
    const newData = data ? data : {};
    const initialValues = attributes;
    const { items } = initialValues


    // const initialValues = merge(defaultValues, newData);
    return (
      <div className="container">
        <Formik
          initialValues={initialValues}
          onSubmit={(
            values: FormValues,
            { setSubmitting }: FormikActions<FormValues>
          ) => {
            const { carousel } = this.props;
            if (!carousel) return setSubmitting(false);
            console.log(values);
            //change later;
            this.context.updateNode(carousel.id, values);
            setSubmitting(false);
          }}
          render={props => {
            const { setFieldValue, isSubmitting, values, handleSubmit } = props;
            console.log(values);
            return (
              <>
                <h5>Change Carousel Images</h5>
                <Form>
                  {items.map((item: any, index: number) => (
                    <Collapsible key={index} label={`Carousel Image ${index + 1}`} title="" show={index == 0 ? true : false}>
                      <FormGroup>
                        <ImageElement
                          type={null}
                          label="Click to Change Image"
                          name={`items[${index}].src`}
                          size="1120X250"
                          value={values ? values.items[index].src : items[index].src}
                          onChange={setFieldValue}
                          handleAddImage={this.handleAddImage}
                        />
                      </FormGroup>
                    </Collapsible>
                  ))}

                  <h5> Add New Carousel Image</h5>
                  <Collapsible label={`Add Image`} title="" show={false}>
                    <ImageElement
                      type="addImage"
                      label="Add New Carousel Image"
                      name=""
                      size="1120X250"
                      value={this.state.newImageValue}
                      onChange={setFieldValue}
                      items={items}
                      handleAddImage={this.handleAddImage}
                    />
                  </Collapsible>

                  <div style={{ marginTop: "30px" }} className="d-flex flex-row-reverse">
                    <div className="d-flex">
                      <Button
                        type="submit"
                        intent="none"
                        onClick={this.props.onClose}
                      >
                        Cancel
                    </Button>
                      <span className="mr-2" />
                      <Button
                        type="submit"
                        intent="primary"
                        loading={isSubmitting}
                      >
                        Save
                    </Button>
                    </div>
                  </div>
                </Form>
              </>
            );
          }}
        />
      </div>
    );
  }
}



export default CarouselForm;

