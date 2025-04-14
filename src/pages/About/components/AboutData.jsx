import './style.aboutdata.css'

const AboutData = ({ name, lastName, age, nationality, languages, address, freelance }) => {
    return (
        <div>
            <h3>Hi, I am Deda Slobo!</h3>

            <table>
                <tr>
                    <td>• First Name</td>
                    <td>: {name}</td>
                </tr>
                <tr>
                    <td>• Last Name</td>
                    <td>: {lastName}</td>
                </tr>
                <tr>
                    <td>• Age</td>
                    <td>: {age}</td>
                </tr>
                <tr>
                    <td>• Nationality</td>
                    <td>: {nationality}</td>
                </tr>
                <tr>
                    <td>• Languages</td>
                    <td>: {languages}</td>
                </tr>
                <tr>
                    <td>• Address</td>
                    <td>: {address}</td>
                </tr>
                <tr>
                    <td>• Freelance</td>
                    <td>: {freelance}</td>
                </tr>
            </table>
        </div>
    )
};

export default AboutData;