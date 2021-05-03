import React from 'react';

import Title from '../Title';

export default function Contact() {
  return (
    <section className='py-5'>
      <div className='row'>
        <div className='col-10 mx-auto my-3'>
          <Title title='contact us' />

          <form
            className='mt-5'
            action='https://formspree.io/sandurijal03@gmail.com'
            method='post'
          >
            {/* first name*/}
            <div className='form-group'>
              {/* firstName: */}
              <input
                className='form-control'
                name='firstName'
                id='firstName'
                placeholder='john smith'
                type='text'
              />
            </div>
            {/* end of firstName */}

            {/* email */}
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                name='email'
                id='email'
                placeholder='someone@example.com'
              />
            </div>
            {/* email end */}

            {/* subject */}
            <div className='form-group'>
              <input
                className='form-control'
                name='subject'
                id='subject'
                type='text'
                placeholder='Important notice'
              />
            </div>
            {/* end of subject */}

            {/* message */}
            <div className='form'>
              <textarea
                name='message'
                className='form-control'
                id='message'
                cols='30'
                rows='10'
                placeholder='pleaase  write your address here'
              ></textarea>
            </div>
            {/* submit */}
            <div className='form-group mt-3'>
              <input
                className='form-control bg-primary text-white'
                type='submit'
                value='Send'
              ></input>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
