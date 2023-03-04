import React from "react";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { Pie } from "./Pie";

export function Dash() {
  return (
    <div>
      <div>
        <h2>Dash Board</h2>
      </div>
      <div className="toprow">
        <div className="first">
          <div className="co">EARNINGS (MONTHLY)
            <ContentPasteIcon fontSize="large" /></div>
          <div className="val">$40,000</div>
        </div>
        <div className="sec">
          <div className="co">EARNINGS (YEARLY)
            <AttachMoneyIcon fontSize="large" />
          </div>

          <div className="val">$215,000</div>
        </div>
        <div className="thi">
          <div className="co">TASKS
            <AssignmentIcon fontSize="large" />
          </div>
          <div className="val"></div>
          <div class="container">
            <div class="skills html">50%</div>
          </div>
        </div>
        <div className="four">
          <div className="co">PENDING TASKS
            <PendingActionsIcon fontSize="large" />
          </div>
          <div className="val">18</div>
        </div>
      </div>

      <div>
        <Pie />
      </div>
      <div className="line3">
        <div className="line3-1">
          <h2 className="title">Project</h2>

          <div className="Server">
            <p>Server Migration</p>
            <p>20%</p>
          </div>
          <div class="container">
            <div class="skills html1">20%</div>
          </div>

          <div className="Sales">
            <p>Sales Tracking</p>
            <p>40%</p>
          </div>  
          <div class="container">
            <div class="skills css">40%</div>
          </div>

          <div className="Customer">
          <p>Customer Database</p>
          <p>60%</p>
          </div>
          <div class="container">
            <div class="skills js">60%</div>
          </div>

          <div className="Payout">
          <p>Payout Details</p>
          <p>80%</p>
          </div>
          <div class="container">
            <div class="skills php">80%</div>
          </div>

          <div className="Account">
          <p>Account Setup</p>
          <p>Complete</p>
          </div>
          <div class="container">
            <div class="skills php1">Complete</div>
          </div>
        </div>

        <div className="line3-2">
          <h2 className="title">Illustration</h2>
          <img className="img" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"></img>
          <p className="add">Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!
          </p>
          <p className="add1">Browse Illustrations on unDraw →</p>
        </div>
      </div>

      <div className="feet">
        <div className="last">
          <div className="box1">
            <p>Primary</p>
            <p>#4e73df</p>
          </div>
          <div className="box2">
            <p>Success</p>
            <p>#1cc88a</p>
          </div>
          <div className="box3">
            <p>Info</p>
            <p>#36b9cc</p>
          </div>
          <div className="box4">
            <p>Warning</p>
            <p>#f6c23e</p>
          </div>
          <div className="box5">
            <p>Danger</p>
            <p>#e74a3b</p>
          </div>
          <div className="box6">
            <p>Secondary</p>
            <p>#858796</p>
          </div>
          <div className="box7">
            <p>Light</p>
            <p>#f8f9fc</p>
          </div>
          <div className="box8">
            <p>Dark</p>
            <p>#5a5c69</p>
          </div>

        </div>
        <div className="line3-21">
          <h2 className="title">Development Approach</h2>

          <p className="add">SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.
          </p>
          <p className="add1">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
        </div>
      </div>

    </div>
  );
}
