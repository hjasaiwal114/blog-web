import "./setting.css";
import Sidebar from "./../components/sidebar/Sidebar";

export default function Settings() {
    return (
        <div className="setting">
            <div className="settingsWrapper">
                <div className="settingTitle">
                    <span className="settingTitleUpdate">Update you Account</span>
                    <span className="settingTitleDelete">Delete Account</span>
                </div>
                <form className="settingForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                           src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                           alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                        </label>
                        <input 
                           id="fileInput"
                           type="file"
                           style={{display: "none"}}
                           className="settingPPInput"
                        />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Safak" name="name" />
                    <label>Email</label>
                    <input type="email" placeholder="hjasaiwal114@gmail.com" name="email" />
                    <label>Password</label>
                    <input type="pasword" placeholder="Password" name="password" />
                    <button className="settingsSubmitButton" type="submit">
                        Update
                    </button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}