import React from 'react';

function NewTapForm(props) {
    let _name = null;
    let _brewer = null;
    let _description = null;
    let _price = null;
    let _abv = null;
    let _remaining = null;

    function handleNewTapFormSubmission(event){
        event.preventDefault();
        props.onNewTapCreation({
            name: _name.value,
            brewer: _brewer.value,
            description: _description.value,
            abv: _abv.value,
            price: _price.value,
            remaining: 124
        });
        _name.value="";
        _brewer.value="";
        _description.value="";
        _price.value="";
        _abv.value="";
        _remaining.value="";
    }
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
           
           
        {/* create new tap */}
           <form onSubmit={handleNewTapFormSubmission}>
                <input
                    type='text'
                    id='name'
                    placeholder='tap name' 
                    ref = {(input) => (_name = input)} 
                    />
                <br></br>
                <input
                    type='text'
                    id='brewer'
                    placeholder='tap brewer' 
                    ref = {(input) => (_brewer = input)} />
                <br></br>
                <input
                    type='text'
                    id='description'
                    placeholder='tap description' 
                    ref = {(input) => (_description = input)}  />
                <br></br>
                <input
                    type='text'
                    id='abv'
                    placeholder='tap abv' 
                    ref = {(input) => (_abv = input)} />
                <br></br>
                <input
                    type='text'
                    id='price'
                    placeholder='tap price' 
                    ref = {(input) => (_price = input)} />
                <br></br>

                <input
                    type='text'
                    id='remaining'
                    placeholder='tap remaining' 
                    ref = {(input) => (_remaining = input)} />
                <br></br>
               
                <button type='submit'>SUBMIT!</button>
            </form>
        </div>
    );
}

export default NewTapForm;