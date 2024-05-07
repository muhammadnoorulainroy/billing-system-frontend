import React from "react";
import slack from '../../assets/images/slack.png'

export default function SigninByEmail() {
  return (
    <div className="text-center mt-5">
      <div>
        <img className="p-1" src={slack} height={30} width={30} alt="slack-logo"/>slack
      </div>
    </div>
  );
}
