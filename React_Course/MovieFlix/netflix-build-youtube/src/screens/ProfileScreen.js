import React, { useEffect, useState } from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";

import PlansScreen from "./PlansScreen";
import "./ProfileScreen.css";
import { query, collection, where, onSnapshot } from "firebase/firestore";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "customers", user.uid, "subscriptions"));

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach(async (subscription) => {
        // console.log(subscription.data());

        setSubscription(subscription.data().role)
      });
    });
  }, [user.uid]);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img src="./man.png" alt="" />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <div className="profileScreen_plansHeading">
                <h3> {`Plans`} </h3>
                {subscription ? (
                  <p>{`(Current: ${subscription})`}</p>
                ) : 
                  <p>{`Not subscribed`}</p>
                }
              </div>
              <PlansScreen />
              <button
                onClick={() => auth.signOut()}
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;