import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WebCommonBanner from "../WebCommonBanner";

const faqData = [
  {
    question: "Overview",
    answer: `A home loan is your gateway to achieving your dream of owning a home. Whether you're looking to buy a new house, upgrade your current one, build on your land, or secure a plot, a home loan makes it possible.

Owning a home is a universal goal, and a home loan is the bridge that turns that goal into reality. The essence of a home loan lies in its extended repayment period, affordable interest rates, substantial loan amounts, tax benefits, and the absence of prepayment penalties. It's the key that unlocks the door to your dream home.

In our Area, different banks and NBFCs have varying criteria for home loans. Nationalized banks can offer up to 85% of the property's agreement value. Multinational banks go even further, considering extra factors to provide up to 140-150% of the agreement value. For NBFCs, it's possible to consider up to 150% of the agreement amount, reaching 75% of the property's market value if it exceeds the agreement value. Interest rates vary depending on the chosen institution, all of which follow RBI's regulations. Home loans are exclusively provided by Home Loan License holder NBFCs. Keep in mind that charges like Stamp Duty, Registration Charges, Auda, AEC, etc., are included, but maintenance and parking fees are not considered when assessing your loan eligibility.

Home loans come with flexible tenure options, ranging from short to long periods. You can tailor the loan to your financial capacity and age, with options available from 5 to 30 years. Additionally, you have the freedom to reshape your home loan journey by making partial payments or contributing extra funds. Both options are available, whether you choose to adjust your loan duration or modify your EMI.

In the past, home loans in India used to have fixed or floating rates. However, due to RBI's rules, banks no longer offer fixed-rate home loans for the entire tenure. While fixed rates may apply for the first year or three, they eventually shift to floating rates influenced by the base rate. Any changes announced by RBI directly impact your home loan's interest—reductions lead to lower rates, while increases result in higher rates.

RBI's initiative has eliminated prepayment penalties for all banks and NBFCs offering home loans. However, specific conditions may apply. Prepaying using your personal funds might exempt you from penalties. But transferring your loan to another financial institution could involve penalties of 2% to 4%, depending on the company's internal policy.`
  },
  {
    question: "Required Documents",
    answer: `★ KYC Documents
1. Pan Card
2. Aadhar Card
3. Passport Size Photos - 3

★ Income Documents (Salaried)
1. Salary Slips of Last 6 Months
2. Form - 16 Last 2 Years
3. All Bank Statements of 1 Year from Till Date
4. Company ID Card Copy
5. Job Offer Letter Copy

★ Income Documents (Self-Employed/Business)
1. Last 3 years IT-returns.
2. Balance Sheet – Computation & Profit-loss.
3. All Bank Statements of 1 Year from Till Date.(Current & Saving)
4. GU-MAT-SA Dhara Certificate, Udhyog-Aadhar, GST Certi.
5. Light-Bill of Business / Rent Agreement (If Rented)
6. Property Paper Copy (Master File)

★ Resident Documents
1. Latest Light Bill Copy
2. Rent Agreement (If Rented)

★ For Currently Running all Loan (If any)
1. Statement of Account Last Year
2. Sanction Letter of Loan`
  },
  {
    question: "Loan Eligibility",
    answer: `★ For Salaried Individuals (Normal Profile)
1. Indian citizenship is a must.
2. Age should be between 21 to 55 years.
3. Employment with Limited, Pvt. Ltd, Government, LLP, MNC, and certain other companies.
4. Minimum 6 months with the current company and 3 years overall (exceptions for Cat A companies).
5. Salary account required with ECS/NEFT salary credits.
6. Deductions like PF, PT, TDS from salary are needed.
7. CIBIL score of 700 or above.

★ For Salaried Individuals (Affordable Profile)
1. Indian citizenship is a must.
2. Age should be between 21 to 55 years.
3. Employment with Limited, Pvt. Ltd, Government, LLP, MNC, and certain other companies.
4. Minimum 6 months with the current company and 3 years overall (exceptions for Cat A companies).
5. ECS, NEFT, IMPS, or Bank Transfer salary credits, including cash salary.
6. Minimum salary of Rs. 15,000/- (Rs. 25,000/- for cash salary).
7. CIBIL score of 600 or above.

★ For Self-Employed Individuals (Prime Profile)
1. Minimum 4-year-old business (complete 3 financial years).
2. Minimum turnover of more than Rs. 5 lakhs.
3. Various business categories accepted.
4. Loan amount calculation follows the DSTR calculator.
5. 1-year-old current account required.
6. Loan amount based on average IT Return of last two years.
7. CIBIL score of 700 or above.

★ For Self-Employed Individuals (Affordable Profile)
1. Minimum 3-year-old business (complete 2 financial years).
2. Minimum turnover of more than Rs. 5 lakhs.
3. Multiple business categories accepted.
4. 1-year-old current or savings account required.
5. Average IT Return determines loan amount.
6. CIBIL score of 600 or above.`
  },
  {
    question: "! Important Note !",
    answer: `✔ Self-Attestation Required: Please ensure that all necessary documents are self-attested by each individual separately.
✔ Hardcopy Submission: Kindly submit all your documents in hardcopy format together.
✔ Softcopy via Email: Additionally, please email us all the softcopies of the documents in PDF format to contact@prarviconsultancy.com`
  },
  {
    question: "Helpful Tips",
    answer: `1. Multiple Quotes, Best Choice: Seek quotes from diverse vendors and banks. Analyze thoroughly to make the optimum selection.
2. Listen to All Voices: Pay attention to every vendor's perspective. Unique insights can unlock valuable knowledge.
3. Transparency Pays Off: Share your full financial background. Honesty aids in finding tailored solutions.
4. Credit Story Matters: Discuss your credit history with vendors. This ensures accurate results and minimizes rejections.
5. Politeness Prevails: Maintain a respectful attitude. A positive relationship is a long-term asset.
6. Prepare Ahead: Arrange all documents and security cheques before applying. This proactive approach saves time.
7. Stay Connected: Stay updated on your application's status by keeping in touch with vendors.
8. Track Application Progress: Use the application number on the bank's website to stay informed about your loan journey.
9. Cost Clarity: Understand all expenses related to your home loan upfront.
10. Mortgage Insight: Determine whether registering a mortgage is mandatory. Opting for non-registration can reduce costs.
11. Insurance Consideration: Check if Loan Protector, property, and life insurance are obligatory. Awareness of insurance policies is essential.
12. Project Partnerships: Opt for banks or NBFCs with pre-approved projects. This eliminates property-related complications.`
  }
];


const LoanAgainstProperty = () => {
  return (
    <>
        <WebCommonBanner />
        <Box className="website-container" sx={{ py: 8,bgcolor:"var(--white)" }}>
      
      {/* Heading */}
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        sx={{ mb: "30px !important",fontFamily:"Regular_M" }}
      >
        Loan Against Property
      </Typography>

      {/* FAQ LIST */}
      <Box sx={{ maxWidth: "800px", mx: "auto" }}>
        {faqData.map((item, index) => (
          <Accordion key={index} sx={{p:1,zIndex:"8 !important"}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600} sx={{fontFamily:"Regular_M",opacity:".8"}}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#555", lineHeight: 1.6, fontFamily:"Regular_M", whiteSpace: "pre-line" }} >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

    </Box>
    </>
  );
};

export default LoanAgainstProperty;
