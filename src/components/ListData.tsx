import {Persons} from "../types";

type ListDataProps = {
    data: Persons;
}

const ListData = ({data} : ListDataProps ) => {
    return (
        <div className="space-y-4">
            {
                data.map((person, index) => {
                    return (
                        <div key={index}
                             className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                            <h1 className="text-2xl font-semibold text-blue-600">{person.username}</h1>
                            <h2 className="text-xl text-gray-800">{person.firstName}</h2>
                            <h3 className="text-sm text-gray-500">{person.email}</h3>
                        </div>
                    )
                })
            }
        </div>  
    );
};

export default ListData;