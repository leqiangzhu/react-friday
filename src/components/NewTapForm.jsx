import React from 'react';

function NewTapForm() {
    return (
        <div>
            <style jsx>{`
             form {
                text-align: center;
                 
                font-size:40px;
                width:100px;
                background-color: white;
                border-radius: 4px !important;
                padding: 32px !important;
                padding-bottom: 24px !important;
                width: 441px !important;
                box-shadow: 0 16px 40px rgba(0,0,0,0.12) !important;
              //  margin: center;
            }
            input{
                display: table-cell !important;
                width: 100% !important;
                vertical-align: middle !important;
                border-radius: 4px;
                height: 46px;
                margin-top: 10px;
                margin-bottom: 10px;
            }
      `}</style>
           
           
           
            <form>
                <input
                    type='text'
                    id='name'
                    placeholder='tap name' />
                <br></br>
                <input
                    type='text'
                    id='brewer'
                    placeholder='tap brewer' />
                <br></br>
                <input
                    type='text'
                    id='description'
                    placeholder='tap description' />
                <br></br>
                <input
                    type='text'
                    id='abv'
                    placeholder='tap abv' />
                <br></br>
                <input
                    type='text'
                    id='price'
                    placeholder='tap price' />
                <br></br>

                <input
                    type='text'
                    id='remaining'
                    placeholder='tap remaining' />
                <br></br>
                <button type='submit'>ADD!</button>
            </form>
        </div>
    );
}

export default NewTapForm;