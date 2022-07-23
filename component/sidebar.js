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

      <div id="accmainbox">
        <div class="mainaccordin">
          <div class="conBoxes">
            <div class="labelbox"><a href="">Track</a></div>
            <div class="labelbox"><a href="">Project</a></div>
            <div class="labelbox">
              <a href="">Report</a>
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25623.png"
                alt="Down Arrow"
              />
            </div>
            <div class="parainsideatag">
              <p><a href="">Dashboard</a></p>
              <p><a href="">Activity</a></p>
              <p><a href="">Team pivot</a></p>
              <p><a href="">Economy</a></p>
              <p><a href="">Timesheet</a></p>
            </div>
          </div>
          <div class="conBoxes">
            <div class="labelbox">
              Clients
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
            <div class="labelbox">
              Team
              <img
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
      <div id="helpApps">
        <p><a href="">Help</a></p>
        <p><a href="">Apps</a></p>
        <p><a href="">What's new</a></p>
        <p><a href="">Profile</a></p>
      </div>
    </div>
  </div>`
}
export default sidebar;