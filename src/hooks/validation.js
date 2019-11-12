import {useState, useEffect} from 'react';
import joi from 'joi-browser'

/* const schema = joi.object({
    username: joi.string().min(3).required(),
    password: joi.string().min(3).required()
}) */

const mapper = {
    string: joi.string().min(3).required(),
    integer: joi.number()
}

function rulesMapper(rulesMapper){
    const x = Object.keys(rulesMapper)
    .reduce((acc, each) => {
        return {
            ...acc,
            //[each.field]: each.mapper
            [each]: mapper[rulesMapper[each]]
        }
    }, {}) //initial object {}

    return joi.object(x)
}

//export default function useValidation(initialValue, rules){
function useValidation(initialValue, schema){

    //{username: 'string'}
    //const x = Object.keys(rules)
    /* .map(each => { //each is field name
        return {
            field: each,
            mapper: mapper[rules[each]] //rules[each] => 'string'
        }
    })  */// [{field: 'username', mapper: _class}]
    /* .reduce((acc, each) => {
        return {
            ...acc,
            //[each.field]: each.mapper
            [each]: mapper[rules[each]]
        }
    }, {})  *///initial object {}

    //const schema = joi.object(x)
    //const schema = joi.object(x)

    const [value, setValue] = useState(initialValue)
    const [messages, setMessages] = useState([]);

    function handleChange(e) {
        console.log(e.target.name)
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        const {error} = joi.validate(value, schema, {abortEarly: false}) //abortEarly valid all
        if(error){
            /* error.details.map((each, idx) => {
                console.log("error => ", each);
            }) */

            console.log("error: ", JSON.stringify(error.details))

            const xxy = error.details
            .map(each => {
                //return each.messages
                return {
                    message: each.message,
                    field: each.context.key
                }
            }) // return [{field: 'username', message: 'error message'}], use errorMessage for change to string error message
            .reduce((acc, each) => {
                console.log("reduce acc => ", acc);
                if(acc[each.field]){ //first error exists, return fiest error
                    return acc;
                } else {
                    return {
                        ...acc,
                        [each.field]: each.message
                    }
                }
            }, {})

            setMessages(xxy)
            //setMessages(error.details)
        } else {
            setMessages([])
        }

        //setDirties(Object.keys(user)) //extract key of user object
    //}, [value]);
}, [value]);

    return [
        value,
        handleChange,
        messages
    ]
}

export {
    rulesMapper,
    useValidation
}