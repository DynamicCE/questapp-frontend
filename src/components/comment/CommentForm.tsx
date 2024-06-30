import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { CommentCreate } from '../../types/Comment';

interface CommentFormProps {
  postId: number;
  userId: number;
  onSubmit: (comment: CommentCreate) => void;
}

const CommentSchema = Yup.object().shape({
  content: Yup.string().required('Yorum içeriği gereklidir'),
});

export const CommentForm: React.FC<CommentFormProps> = ({ postId, userId, onSubmit }) => {
  const initialValues: CommentCreate = { postId, userId, content: '' };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CommentSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field as="textarea" name="content" placeholder="Yorumunuzu yazın..." />
          <ErrorMessage name="content" component="div" />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Gönderiliyor...' : 'Yorum Yap'}
          </button>
        </Form>
      )}
    </Formik>
  );
};