import { MAX_NUM_INSTALLMENTS, MONTHLY_INTEREST_RATE } from "../constants";
import Installment from "./Installment";

export default class CalculateInstallment {
	execute(
		value: number,
		installmentQuantity: number = MAX_NUM_INSTALLMENTS,
		interestRate: number = MONTHLY_INTEREST_RATE
	): Installment {
		if (installmentQuantity < 2 || installmentQuantity > MAX_NUM_INSTALLMENTS) {
			throw new Error(
				`Quantidade de parcelas deve ser entre 2 e ${MAX_NUM_INSTALLMENTS}`
			);
		}

		const totalWithInterest = this.calculateCompoundInterest(
			value,
			interestRate,
			installmentQuantity
		);

		return {
			installmentValue: this.withTwoDecimalPlaces(totalWithInterest),
			totalValue: this.withTwoDecimalPlaces(
				totalWithInterest / installmentQuantity
			),
			installmentQuantity,
			interestRate
		};
	}

	private calculateCompoundInterest(
		totalValue: number,
		interestRate: number,
		installmentQuantity: number
	): number {
		return totalValue * Math.pow(1 + interestRate, installmentQuantity);
	}

	private withTwoDecimalPlaces(value: number): number {
		return Math.round(value * 100) / 100;
	}
}
