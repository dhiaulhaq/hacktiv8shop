import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';



export const deliveryOptions = [{

    id: '1',
    deliveryDays: 7,
    priceCents: 0

}, {

    id: '2',
    deliveryDays: 3,
    priceCents: 499
}, {
    id: '3',
    deliveryDays: 1,
    priceCents: 999
}]

export default deliveryOptions;


export function getDeliveryOption(deliveryOptionId) {
    let deliveryOption;
    deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId) {
            deliveryOption = option;
        }
    });
    return deliveryOption || deliveryOptions[0];
}

export function calculateDeliveryDate(deliveryOptionId) {
    // to get full deliveryOption
    // const deliveryOption = getDeliveryOption(deliveryOptionId)
    // const today = dayjs();
    // const deliveryDate = today.add(
    //     deliveryOption.deliveryDays,
    //     'days'
    // );
    // const dateString = deliveryDate.format(
    //     'dddd, MMM D'
    // );
    // return dateString
    const deliveryOption = getDeliveryOption(deliveryOptionId)
    let deliveryDay = deliveryOption.deliveryDays
    let today = dayjs();
    let dateString;
    for (let i = 0; i <= deliveryDay;) {
        dateString = today.format('dddd ,MMM, D')
        // skip the weekedn
        if (dateString.includes("Saturday") || dateString.includes("Sunday")) {

            today = today.add(1, 'day');
            continue;

        }
        today = today.add(1, 'day')
        i++;




    }
    return dateString
}
// deliveryOptions.forEach((deliveryOption) => {
//     let deliveryDay = deliveryOption.deliveryDays
//     let today = dayjs();
//     //
//     // const ttoday = dayjs.format('d')

//     for (let i = 0; i < deliveryDay; i++) {
//         let dateString = today.format('dddd ,MMM, D')

//         //
//         if (dateString.includes("Saturday") || dateString.includes("Sunday")) {
//             // this increasement still running until this condition (let i = 0; i < number.length; i++) false
//             today = today.add(1, 'day');

//             continue;
//         }

//         today = today.add(1, 'day')
//         console.log(dateString);

//     }


// })