// Simple mortgage functions calculated

/**
  * Calculates the payments and other information for a loan
  * of amount A, at APR r compounded and k times a year.  The
  * payment is at the very end of the compounding period.
*/
function paymentCalc(A, r, k, N) {
  let gamma = Math.pow(1+r, 1/k)
  let pmts=A*(1-gamma)/(1-gamma**N)*gamma**N
  return pmts
}

/**
  * Calculates lots of useful information about total loan info.
  * Returns a
*/

function paymentCalcWithOver(A, r, k, N, over_amt) {
  let pmt = paymentCalc(A, r, k, N)
  let new_pmt = pmt + over_amt
  let amount_left = A
  let gamma = Math.pow((1+r),(1/k))
  let total_paid = 0
  let pmt_count = 0
  while (amount_left > 0) {
    //Add interest to amount left
    amount_left *= gamma
    //Subtract our payment, or the amount left, whichever is less
    if (amount_left > new_pmt) {
      //Just subtract a payment
      amount_left -= new_pmt
      total_paid += new_pmt
    } else {
      //Just subtract the amount left
      total_paid += amount_left
      amount_left = 0
    }
    pmt_count += 1
  }
  return {
      "original": {
        "pmt":pmt,
        "total": pmt*N,
        "npmts":N
      },
      "new": {
        "pmt": new_pmt,
        "npmts": pmt_count,
        "total": total_paid,
      },
      "savings": (pmt*N - total_paid)
  }
}
