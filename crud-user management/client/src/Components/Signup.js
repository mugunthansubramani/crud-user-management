import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function Signup() {

    const handlesubmit = async (event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = { headers: { "enctype": "multipart/form-data" } };

        var firstname = document.getElementById('firstname').value;
        var lastname = document.getElementById('lastname').value;
        var email = document.getElementById('email').value;
        var mobile = document.getElementById('mobile').value;
        var pin = document.getElementById('pin').value;

        if (firstname === '' || firstname === null) {
            alert('Enter your Firstname');
        }
        else if (lastname === '' || lastname === null) {
            alert('Enter your Lastname');
        }
        else if (email === '' || email === null) {
            alert('Enter your Email');
        }
        else if (mobile === '' || mobile === null) {
            alert('Enter your Mobile-Number')
        }
        else if (pin === '' || pin === null) {
            alert('Enter your Pin');
        }
        else {
            await axios.post("http://localhost:3012/Signup", datastring, config)
                .then(function (a) {
                    if (a.data.status === 'error') {
                        alert('SQL Syntax error.contact admin');
                        window.location.href = "/";
                    }
                    else if (a.data.status === 'success') {
                        alert('Data Inserted');
                        window.location.href = "/";
                    }
                    else {
                        alert('Contact Admin');
                        window.location.href = "/";
                    }
                })
                .catch(function (error) {
                    alert(error);
                    window.location.reload();
                })
        }
    }

    return (
        <>
            <div className='signupp'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">&nbsp;</div>
                        <div className="col-lg-4">
                            <form onSubmit={handlesubmit}>
                                <div className="table-responsive">
                                    <div width="100%" className="table table-bordered up">
                                        <div>
                                            <div className='text-center text-success'>
                                                <h3 colspan="2">Sign-up Page</h3>
                                            </div>
                                        </div>
                                        <div>
                                           
                                            <div className='text-center mt-5'>
                                                <label className='text-light'>Firstname : </label>
                                                <div>
                                                    <input type="text" name="firstname" id="firstname" placeholder='Enter First Name' className="form-control" />
                                                </div>
                                            </div>
                                            <div className='text-center mt-3'>
                                                <label className='text-light'>Lastname : </label>
                                                <div>
                                                    <input type="text" name="lastname" id="lastname" placeholder='Enter Last Name' className="form-control" />
                                                </div>
                                            </div>
                                            <div className='text-center mt-3'>
                                                <label className='text-light'>Email : </label>
                                                <div>
                                                    <input type="text" name="email" id="email" placeholder='Enter Email id' className="form-control" />
                                                </div>
                                            </div>
                                            <div className='text-center mt-3'>
                                                <label className='text-light'>Mobile : </label>
                                                <div>
                                                    <input type="text" name="mobile" id="mobile" placeholder='Enter Mobile No' className="form-control" />
                                                </div>
                                            </div>
                                            <div className='text-center mt-3'>
                                                <label className='text-light'>Password : </label>
                                                <div>
                                                    <input type="password" name="pin" id="pin" placeholder='Enter Password' className="form-control" />
                                                </div>
                                            </div>
                                            <div className='text-center mt-3'>
                                                <label className='text-light'>Signup type</label>
                                                <div>
                                                    <select name="role" id="role" className="form-control">
                                                        <option value="">CHOOSE</option>
                                                        <option value="Admin">Admin</option>
                                                        <option value="User">User</option>
                                                        <option value="Employer">Employer</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='text-center mt-5'>
                                                    <Link to="/">
                                                        <button type="button" name="data_send" id="data_send" value="send" className="btn btn-warning">
                                                            Sign-in
                                                        </button>
                                                    </Link>

                                                    {/* <div className='text-center mt-3'> */}
                                                    <button type="submit" name="data_submit" id="data_submit"
                                                        value="submit" className="btn btn-info ml-5">Submit</button>
                                                    {/* </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4">&nbsp;</div>
                    </div>
                </div>
            </div>
        </>
    )
}