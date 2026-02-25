import { createHashRouter } from "react-router-dom";
import WebsiteLayout from "../website/WebsiteLayout";
import WebHome from "../website/home/WebHome";
import WebAbout from "../website/about/WebAbout";
import WebContact from "../website/contact/WebContact";
import WebSub from "../website/plan/WebSub";
import WebJob from "../website/job/WebJob";
import WebOutsourcing from "../website/Clients/WebOutsourcing";
import WebRecruitment from "../website/Clients/WebRecruitment";
import HomeLoan from "../website/services/HomeLoan";
import MachineryLoan from "../website/services/MachineryLoan";
import BusinessLoan from "../website/services/BusinessLoan";
import PersonalLoan from "../website/services/PersonalLoan";
import MortgageLoan from "../website/services/MortgageLoan";
import LoanAgainstProperty from "../website/services/LoanAgainstProperty";

const routes = createHashRouter([
  {
    path: "/",
    element: <WebsiteLayout /> ,
    children: [
      {
        path: "/",
        element: <WebHome />,
      },
      {
        path: "/about",
        element: <WebAbout />,
      },
      {
        path: "/contact",
        element: <WebContact />,
      },
      {
        path: "/mortgageloan",
        element: <MortgageLoan />,
      },
      {
        path: "/homeloan",
        element: <HomeLoan />,
      },
      {
        path: "/machineryloan",
        element: <MachineryLoan />,
      },
      {
        path: "/businessloan",
        element: <BusinessLoan />,
      },
      {
        path: "/personalloan",
        element: <PersonalLoan />,
      },
      {
        path: "/loanagainstproperty",
        element: <LoanAgainstProperty />,
      },
      // {
      //   path: "/plans",
      //   element: <WebSub />,
      // },
      // {
      //   path: "/outsourcing",
      //   element: <WebOutsourcing />,
      // },
      // {
      //   path: "/recruitment",
      //   element: <WebRecruitment />,
      // },
    ],
  },
]);

export default routes;
