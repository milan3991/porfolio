import './style.aboutdata.css'

const AboutData = ({ name, lastName, age, nationality, languages, address, freelance }) => {
    return (
        <div>
            <h2>Hi, I am Deda Slobo!</h2>
            <table>
                <tbody>
                    <tr>
                        <td>• First Name</td>
                        <td>: {name}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>• Last Name</td>
                        <td>: {lastName}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>• Age</td>
                        <td>: {age}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>• Nationality</td>
                        <td>: {nationality}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>• Languages</td>
                        <td>: {languages}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>• Address</td>
                        <td>: {address}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>• Freelance</td>
                        <td>: {freelance}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default AboutData;