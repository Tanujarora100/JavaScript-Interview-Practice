import customers from "./GetSeniorCitizens";
function addFullName(customers: { f_name: string, l_name: string }[]) {
    const customersWithFullName = customers.map((customer) => {
        const fullName = `${customer.f_name}+${customer.l_name}`;
        //push it at the end of the object
        return { ...customer, fullName };
    });
    return customersWithFullName;
}

console.log(addFullName(customers));