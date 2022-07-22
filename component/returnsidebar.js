function sidebar() {
    return `<div id="sideBar">
    <div id="sidebarBox">
      <div id="img-fr-sb">
        <img
          id="logo-sq"
          src="https://icon-library.com/images/256-256-ed559f9ab4ee6cec08ffde71c58a68af-grid.png"
          alt=""
        />
        <img
          src="https://app.myhours.com/assets/myhours_app_logo_icon.svg"
          alt=""
        />
      </div>
      <div style="background-color: #f8f9fa" id="to-scroll">
        <div id="accmainbox">
          <div class="mainaccordin">
            <div class="conBoxes">
              <div class="labelbox t-p-h-a">
                <a class="fb-aws-n-tx" href=""
                  ><i class="fa-solid fa-stopwatch"></i> &nbsp;&nbsp;
                  Track</a
                >
              </div>
              <div class="labelbox t-p-h-a">
                <a class="fb-aws-n-tx" href=""
                  ><i class="fa-solid fa-briefcase"></i
                  >&nbsp;&nbsp;&nbsp;Project</a
                >
              </div>
              <div class="fb-aws-n-tx labelbox">
                <span fb-aws-span
                  ><i class="fa-solid fa-chart-column"></i
                  >&nbsp;&nbsp;&nbsp;Report</span
                >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25623.png"
                  alt="Down Arrow"
                />
                <div class="parainsideatag">
                  <p><a href="">Dashboard</a></p>
                  <p><a href="">Activity</a></p>
                  <p><a href="">Team pivot</a></p>
                  <p><a href="">Economy</a></p>
                  <p><a href="">Timesheet</a></p>
                </div>
              </div>
            </div>
            <div class="conBoxes">
              <div class="fb-aws-n-tx labelbox">
                <span fb-aws-span
                  ><i class="fa-solid fa-folder"></i
                  >&nbsp;&nbsp;&nbsp;Clients</span
                >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25623.png"
                  alt="Down Arrow"
                />
              </div>
              <div class="parainsideatag">
                <p><a href="">Clients</a></p>
                <p><a href="">Invoices</a></p>
                <p><a href="">Uninvoiced</a></p>
              </div>
            </div>
            <div class="conBoxes">
              <div class="fb-aws-n-tx labelbox">
                <span fb-aws-span
                  ><i class="fa-solid fa-users"></i
                  >&nbsp;&nbsp;&nbsp;Team</span
                >
                <img
                  id="team-arrow-img"
                  src="https://cdn-icons-png.flaticon.com/512/25/25623.png"
                  alt="Down Arrow"
                />
              </div>
              <div class="parainsideatag">
                <p><a href="">Team members</a></p>
                <p><a href="">Teams</a></p>
              </div>
            </div>
          </div>
        </div>
        <div id="protrailexpire">
          <p>Pro trial expires in 13 days.</p>
          <a href="">Keep/leave the Pro</a>
        </div>
        <div style="background-color: #f8f9fa" id="helpApps">
          <div class="labelbox t-p-h-a">
            <a class="fb-aws-n-tx" href=""
              ><i class="fa-solid fa-circle-question"></i
              >&nbsp;&nbsp;&nbsp;Help</a
            >
          </div>
  
          <div class="labelbox t-p-h-a">
            <a class="fb-aws-n-tx" href=""
              ><i class="fa-solid fa-mobile-button"></i
              >&nbsp;&nbsp;&nbsp;Apps</a
            >
          </div>
  
          <div class="labelbox">
            <a class="fb-aws-n-tx" href=""
              ><i class="fa-solid fa-bell"></i>&nbsp;&nbsp;&nbsp;What's
              new</a
            >
          </div>
  
          <div class="mainaccordin">
            <div class="conBoxes">
              <div class="m-p-z-f-p fb-aws-n-tx labelbox">
                <span class="fb-aws-span"
                  ><i class="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;<span
                    onclick="profile()"
                    id="name-profile"
                    >Profile</span
                  ></span
                >
                <img
                  id="p-n-img-log"
                  src="https://cdn-icons-png.flaticon.com/512/25/25623.png"
                  alt="Down Arrow"
                />
              </div>
  
              <div class="parainsideatag">
                <p><a href="">Company</a></p>
                <p><a href="">Account Admin</a></p>
                <p><a href="">Subscription</a></p>
                <hr />
                <p onclick="profileSignout()"><a href="">Signout</a></p>
                <p><a href="">Profile</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  }
  
  export default sidebar;