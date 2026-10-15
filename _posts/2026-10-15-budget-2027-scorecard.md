---
layout: post
title: "Budget 2027, scored: the line that wasn't there"
description: "Last week I set three tests for Malaysia's budget on AI and the tax base. It passed none of them cleanly, and the most telling result is a number the government left out."
tags: [Fiscal policy, AI, Malaysia]
walk_note: "Friday's budget was supposed to settle last week's argument. It didn't, but it moved it."
sources:
  - title: "Ministry of Finance Malaysia, “Fiscal Outlook and Federal Government Revenue Estimates 2027, Section 2: Federal Government Revenue” (Table 2.1)"
    url: "https://belanjawan.mof.gov.my/pdf/belanjawan2027/revenue/section2.pdf"
  - title: "Ministry of Finance Malaysia, “Details of Federal Government Revenue Estimates 2027”"
    url: "https://belanjawan.mof.gov.my/pdf/belanjawan2027/revenue/details.pdf"
  - title: "Ministry of Finance Malaysia, “Pre-Budget Statement 2027”, 18 August 2026"
    url: "https://mof.gov.my/portal/en/news/press-release/pre-budget-statement-2027"
  - title: "The Edge Malaysia, “Malaysia rethinking investment incentives as data centre boom exposes policy gaps, says Treasury secretary general”, 23 July 2026"
    url: "https://theedgemalaysia.com/node/811775"
  - title: "Deloitte Southeast Asia, “Malaysia Budget 2027 snapshot”"
    url: "https://www.deloitte.com/southeast-asia/en/services/tax/perspectives/malaysia-budget-2027-snapshot.html"
  - title: "The Sun, “Budget 2027: Malaysia offers 5% tax rate to attract global services hubs”, 9 October 2026"
    url: "https://thesun.my/budget-2027/budget-2027-malaysia-offers-5-tax-rate-to-attract-global-services-hubs/"
  - title: "EdgeProp, “Budget 2027: Data-centre fund highlighted; TNB to invest RM15b in grid”, 9 October 2026"
    url: "https://www.edgeprop.my/content/1917782/budget-2027-data-centre-fund-highlighted-tnb-invest-rm15b-grid"
  - title: "KPMG Malaysia, “New Incentive Framework”, January 2026"
    url: "https://kpmg.com/my/en/home/insights/2026/01/new-incentive-framework.html"
  - title: "Inland Revenue Board of Malaysia, “Guideline: The Implementation of Domestic Top-up Tax in Malaysia”"
    url: "https://www.hasil.gov.my/media/llke0zf0/domestic-topup-tax-guidelines.pdf"
---

[Last week's post]({{ '/2026/10/ai-tax-base-malaysia/' | relative_url }}) ended with my dad and me holding our ground, waiting for Friday's budget to settle it.

The argument, briefly: Malaysia collects about twice as much tax from company profits as from people's wages, which should protect it if AI shifts income from workers to firms. But the AI investment actually arriving here, mostly data centres, is offered some of the lowest tax rates in the country. So I set three tests for Budget 2027. The Prime Minister tabled it on 9 October. Here's how it scored.

## Test 1: New incentives stacked on old ones, or replacing them?

**Verdict: Mixed.**

Credit where it's due: I couldn't find a new tax break aimed specifically at AI or data centres in the budget or the tax firms' summaries of it. But the habit of adding another low rate hasn't gone away. The budget creates a Global Services Hub incentive: a 5% tax rate from 1 January 2027, with incentive periods of up to 30 years. It also extends the Green Investment Tax Allowance, worth up to 100% of qualifying green spending, to the end of 2030. Nothing I've read withdraws the existing 5% rate in the Johor–Singapore zone or the Malaysia Digital allowances that data centres use.

On the other side of the ledger, the New Incentive Framework has already replaced the old Pioneer Status system for new manufacturing applications since March. So there is some pruning. It's just slower than the planting.

## Test 2: Are incentives tied to outcomes, or just to capital spending?

**Verdict: Mixed. The words have changed; the tools mostly haven't.**

This is where the government has been surprisingly frank. In July, Treasury secretary general Johan Mahmood Merican said Malaysia "perhaps overdid the red carpet for data centres", and that incentives "based on large expenditures" may not be "completely aligned with our national objectives". The Pre-Budget Statement in August promised that "data-centre incentives will be tied to energy and water efficiency".

That's the right diagnosis. But look at what was actually extended: a tax rate (5% for up to 30 years) and a capital allowance (up to 100% of spending). Both reward showing up and spending, not hiring locally or buying from Malaysian suppliers. And the one new condition for data centres is about electricity and water, not jobs. According to EdgeProp's coverage, the speech didn't set numerical efficiency thresholds either.

The thing that would settle this test properly is a Tax Expenditure Statement: an official estimate of how much each incentive costs. The Ministry of Finance says it is working towards publishing one. Until it does, nobody outside the government can say whether the incentives are worth it.

## Test 3: Does the government count on top-up tax revenue, and when?

**Verdict: Fails.**

This is the most telling result, because it's about something missing.

{% include stat.html number="30 June 2027" label="First Domestic Top-up Tax payments fall due. The 2027 revenue estimates don't mention the tax at all." %}

Under the Global Minimum Tax, a big multinational that pays less than 15% in Malaysia owes the difference, and Malaysia collects it through its own Domestic Top-up Tax. The first payments are due in the middle of 2027, inside the year this budget covers. Yet the Ministry of Finance's 2027 revenue section doesn't mention the Global Minimum Tax, the top-up tax or Pillar Two anywhere, and the revenue tables have no line for it. Income tax is split into companies, individuals, petroleum, withholding and "others". That's it.

So either the top-up tax is folded silently into companies income tax, or the government is assuming it will collect nothing. To be fair, a first-year number would be hard to forecast. But this matters for my argument: top-up tax is collected precisely when incentives push a company's rate below 15%. An estimate would be a partial price tag on the tax breaks. Leaving it out keeps that cost invisible for another year.

## Did "Malaysia taxes companies" survive?

Yes, just. In the 2027 estimates, companies income tax brings in RM106.6 billion and individual income tax RM51.8 billion, still about two to one. But the shares are moving.

{% include chart.html
   type="bar"
   horizontal="true"
   title="Share of federal revenue: last year's budget estimate vs this year's (%)"
   labels="Companies income tax, Sales and service tax, Individual income tax"
   series="2026 (Budget 2026 estimate)"
   values="30.1, 17.4, 14.3"
   series2="2027 (Budget 2027 estimate)"
   values2="28.0, 19.2, 13.6"
   unit="%"
   source="Source: Ministry of Finance Malaysia, Fiscal Outlook 2026 and Fiscal Outlook 2027, Table 2.1. Both exclude that year's budget measures." %}

Companies' share fell from 30.1% in last year's budget to 28.0%, while sales and service tax climbed from 17.4% to 19.2%. It now brings in RM73.3 billion, about one and a half times individual income tax.

The individual figure will probably move again, because the estimates exclude this budget's own measures. Incomes between RM70,000 and RM150,000 get a one-point rate cut and the main personal relief rises from RM9,000 to RM12,000. At the very top, though, the 30% rate will now start at RM1 million instead of RM2 million.

So Malaysia's protection against AI is still there, but it's quietly shifting from company tax to consumption tax. That's one of the fixes *The Economist* said economists are converging on, because consumption is hard to hide. The catch is that consumption taxes take a bigger bite out of poorer households' incomes. Malaysia softens that by exempting essentials like rice and vegetables, but it's a trade-off, not a free lunch.

## Where that leaves the argument

Last week I thought Malaysia's company-heavy tax system was a good defence against AI, as long as the profits got taxed. Friday's budget didn't add many new tax breaks, which is good for my side. But it also didn't tell us how much the existing ones cost, or how much the top-up tax will claw back. And it showed the tax base tilting away from companies anyway.

My dad's point was that it all depends on who actually ends up with the profits. After reading the budget, I'd add one thing: it also depends on whether anyone counts them. The next things I'll be watching are the Tax Expenditure Statement, if it arrives, and whether next year's revenue estimates finally include a line for the top-up tax.
