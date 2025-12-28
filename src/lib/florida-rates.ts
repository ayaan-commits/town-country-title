// Florida Title Insurance Rate Calculator
// Based on Florida Department of Financial Services regulated rates

export function calculateTitleInsurance(purchasePrice: number): number {
  let premium = 0;
  if (purchasePrice <= 100000) {
    premium = purchasePrice * 0.00575; // $5.75 per $1,000
  } else if (purchasePrice <= 1000000) {
    premium = 575 + (purchasePrice - 100000) * 0.005; // $5.00 per $1,000
  } else {
    premium = 575 + 4500 + (purchasePrice - 1000000) * 0.0025; // $2.50 per $1,000
  }
  return Math.round(premium * 100) / 100;
}

export function calculateDocStamps(price: number): number {
  // Florida Documentary Stamps: $0.70 per $100
  return Math.ceil(price / 100) * 0.70;
}

export function calculateIntangibleTax(mortgageAmount: number): number {
  // Florida Intangible Tax: 2 mills ($0.002)
  return mortgageAmount * 0.002;
}

export function calculateRecordingFees(pages: number = 2): number {
  // Standard recording fee: $10 for first page, $8.50 for additional
  return 10 + (pages - 1) * 8.50;
}

export function calculateSettlementFee(): number {
  // Average settlement/closing fee in Florida
  return 450;
}

export function calculateTitleSearchFee(): number {
  // Average title search fee
  return 150;
}

export function calculateLendersTitleInsurance(loanAmount: number): number {
  // Lender's policy (simultaneous issue rate - discounted)
  if (loanAmount <= 100000) {
    return loanAmount * 0.00525;
  } else if (loanAmount <= 1000000) {
    return 525 + (loanAmount - 100000) * 0.00450;
  } else {
    return 525 + 4050 + (loanAmount - 1000000) * 0.00225;
  }
}

export interface ClosingCostEstimate {
  // Title Insurance
  ownersTitleInsurance: number;
  lendersTitleInsurance: number;

  // Taxes & Government Fees
  documentaryStamps: number;
  intangibleTax: number;
  recordingFees: number;

  // Title Company Fees
  settlementFee: number;
  titleSearchFee: number;

  // Totals
  totalTitleCharges: number;
  totalGovernmentFees: number;
  grandTotal: number;
}

export function calculateClosingCosts(
  purchasePrice: number,
  loanAmount: number,
  isRefinance: boolean = false
): ClosingCostEstimate {
  const ownersTitleInsurance = isRefinance ? 0 : calculateTitleInsurance(purchasePrice);
  const lendersTitleInsurance = loanAmount > 0 ? calculateLendersTitleInsurance(loanAmount) : 0;
  const documentaryStamps = isRefinance ? 0 : calculateDocStamps(purchasePrice);
  const intangibleTax = loanAmount > 0 ? calculateIntangibleTax(loanAmount) : 0;
  const recordingFees = calculateRecordingFees(isRefinance ? 3 : 4);
  const settlementFee = calculateSettlementFee();
  const titleSearchFee = calculateTitleSearchFee();

  const totalTitleCharges = ownersTitleInsurance + lendersTitleInsurance + settlementFee + titleSearchFee;
  const totalGovernmentFees = documentaryStamps + intangibleTax + recordingFees;
  const grandTotal = totalTitleCharges + totalGovernmentFees;

  return {
    ownersTitleInsurance: Math.round(ownersTitleInsurance * 100) / 100,
    lendersTitleInsurance: Math.round(lendersTitleInsurance * 100) / 100,
    documentaryStamps: Math.round(documentaryStamps * 100) / 100,
    intangibleTax: Math.round(intangibleTax * 100) / 100,
    recordingFees: Math.round(recordingFees * 100) / 100,
    settlementFee,
    titleSearchFee,
    totalTitleCharges: Math.round(totalTitleCharges * 100) / 100,
    totalGovernmentFees: Math.round(totalGovernmentFees * 100) / 100,
    grandTotal: Math.round(grandTotal * 100) / 100,
  };
}
