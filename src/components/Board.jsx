const Board = () => {

    return (
        <div>
            <div className="text-center">
                <div className="font-bold">
                    <h1>Leader Board</h1>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Calories Burned</th>
                            <th>Miles Walked</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>

                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>

                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>



                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default Board;