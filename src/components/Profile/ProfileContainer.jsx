import React from "react";
import Profile from "./Profile";
import { getStatus, getUserProfile, updateStatus } from "../redux/profile-reducer";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {compose} from "redux";

export function withRouter(ProfileContainer) {
    return(props) => {
        const match = {params: useParams()};
        return <ProfileContainer {...props} match = {match}/>

    }
}

class ProfileContainer extends React.Component {

componentDidUpdate() {
    let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 31383;
        }
        this.props.getUserProfile(userId);
        
        this.props.getStatus(userId);
}
    render() {
        return (
               <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            )
        }

}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,

});


export default compose (
    connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
) (ProfileContainer);



// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);