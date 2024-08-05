import React, { Fragment } from 'react';

import Button from '@atlaskit/button/new';
import Form, { Field, FormFooter, HelperMessage } from '@atlaskit/form';

import Textfield from '@atlaskit/textfield';

export default function CommentBox() {
    return (
        <Form onSubmit={(formState: unknown) => console.log('form submitted', formState)}>
            {({ formProps }: any) => (
                <form {...formProps}>
                    <Field label="Comment" name="example-text">
                        {({ fieldProps }: any) => (
                            <Fragment>
                                <Textfield placeholder="Enter your comment here" {...fieldProps} />
                            </Fragment>
                        )}
                    </Field>
                    <FormFooter>
                        <Button type="submit" appearance="primary">
                            Post
                        </Button>
                    </FormFooter>
                </form>
            )}
        </Form>
    );
}