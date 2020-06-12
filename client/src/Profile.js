import React from 'react';
import ListingShowPage from './ListingShowPage';

export default class Profile extends React.Component{

   // Right now, this is displaying the profile for donors and receivers, but this can be conditionally rendered depending on what type of account the user has.  

displayDonorListings=()=>{
   return this.props.donorListings && this.props.donorListings.map(listing=>{
    return <div>
    <p onClick= {()=>this.props.goToDonationListingShowPageFromProfile(listing)} className="background-for-general-listings"><img className='general-listing' src= {require(`${listing.image}`)} alt= {listing.name}/></p>
    </div>     
    })
}
        
displayDirectRequestsReceived=()=>{
    return this.props.donorDirectRequestsReceived && this.props.donorDirectRequestsReceived.map(listing=>{
        return <div>
        <p onClick= {()=>this.props.goToDirectRequestFromProfile(listing)} className="background-for-general-listings"><img className='general-listing' src= {require(`${listing.image}`)} alt= {listing.name}/></p>
        </div>     
        })
}

displayDirectRequestsApproved=()=>{
    return this.props.donorApprovedRequests && this.props.donorApprovedRequests.map(listing=>{
        return <div>
        <p onClick= {()=>this.props.goToApprovedRequestsFromProfile(listing)} className="background-for-general-listings"><img className='general-listing' src= {require(`${listing.image}`)} alt= {listing.name}/></p>
        </div>     
        })
}

displayRequestListings=()=>{
    return this.props.requestorListings.map(listing=>{
        return <div>
        <p onClick= {()=>this.props.goToRequestListingShowPageFromProfile(listing)} className="background-for-general-listings"><img className='general-listing' src= {require(`${listing.image}`)} alt= {listing.name}/></p>
        </div>     
        })
}


displayDirectDonationRequests=()=>{
    return this.props.requestorDirectDonationRequestsReceived.map(listing=>{
        return <div>
        <p onClick= {()=>this.props.goToDirectDonationFromProfile(listing)} className="background-for-general-listings"><img className='general-listing' src= {require(`${listing.image}`)} alt= {listing.name}/></p>
        </div>     
        })
}

displayAcceptedDonationRequests=()=>{
    return this.props.requestorAcceptedDonations.map(listing=>{
        return <div>
        <p onClick= {()=>this.props.goToAcceptedDonationsFromProfile(listing)} className="background-for-general-listings"><img className='general-listing' src= {require(`${listing.image}`)} alt= {listing.name}/></p>
        </div>     
        }) 
}

    render(){
        return(

            !this.props.aShowPageIsExpanded ?

                   this.props.userType === "donor" ?

                   <div className="profile-page-container">
                    <h2>My Listings</h2>
                    {this.displayDonorListings()}
                    <h2>Direct Requests Received</h2>
                    {this.displayDirectRequestsReceived()}
                    <h2>Direct Requests Approved</h2>
                    {this.displayDirectRequestsApproved()}

                    </div>
                :

                <div className="profile-page-container">
                    <h2>My Listings</h2>
                    {this.displayRequestListings()}
                    <h2>Direct Donation Requests Received</h2>
                    {this.displayDirectDonationRequests()}
                    <h2>Direct Donation Requests Accepted</h2>
                    {this.displayAcceptedDonationRequests()}
                </div> 
            :

            <ListingShowPage currentlyExpandedListing={this.props.currentlyExpandedListing}
            returnToListingsIndex={this.props.returnToListingsIndex}
            donationListingShowPageExpanded={this.props.donationListingShowPageExpanded}
            acceptRequest={this.props.acceptRequest} 
            declineRequest={this.props.declineRequest} 
            deleteItem={this.props.deleteItem} 
            profileListingExpanded={this.props.profileListingExpanded}
            typeOfListingExpanded={this.props.typeOfListingExpanded}/>
        )
    }
}