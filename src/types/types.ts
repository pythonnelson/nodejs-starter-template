import { Request } from "express";

export interface TypedRequestedBody<T> extends Request {
  body: T;
}

export enum PurposeOfTravel {
  TOURISM = "TOURISM",
  BUSINESS = "BUSINESS",
  OFFICIAL = "OFFICIAL",
  PLEASURE = "PLEASURE",
  OTHER = "OTHER"
}
  
export enum VisaApplicationStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  UNDER_REVIEW = "UNDER_REVIEW"
}

export enum MaritalStatus {
  SINGLE = 'SINGLE',
  MARRIED = 'MARRIED',
  DIVORCED = 'DIVORCED',
  WIDOWED = 'WIDOWED'
}

export enum FinancialSupportType {
  SELF_FUNDED = 'SELF_FUNDED',
  SPONSORED = 'SPONSORED'
}

export enum VisaType {
  SINGLE = 'SINGLE',
  TRANSIT = 'TRANSIT',
  MULTIPLE = 'MULTIPLE'
}

export type VisaApplicationProps = {
  applicationId: string;
  location: string;
  imageUrl: string;

  // PERSONAL INFORMATION
  familyName?: string;
  otherNames?: string;
  dateOfBirth?: Date;
  nationalityAtBirth?: string;
  maritalStatus: MaritalStatus;
  profession?: string;

  // PASSPORT INFORMATION
  passportNumber?: string;
  dateOfIssue?: Date;
  expiryDate?: Date | null;
  noExpiry?: boolean;
  issuingCountry?: string;

  // TRAVEL INFORMATION
  expectedDateOfEntry?: Date;
  durationStay?: string;
  purposeOfTravel: PurposeOfTravel;
  otherReason?: string;
  addressInSierraLeone?: string;
  contactPersonInSierraLeone?: string;

  // CONTACT INFORMATION
  phoneNumber?: string;
  permanentAddress?: string;
  travellingAlone?: boolean;
  accompaniedBy?: string;
  countryOfResidence?: string;
  previousStayInSierraLeone?: boolean;
  previousStayAddress?: string;

  // BUSINESS / STUDY INFORMATION
  businessContact?: string;
  businessContactAddress?: string;
  businessContactPhoneNumber?: string;
  businessContactEmail?: string;
  institution?: string;
  startDate?: Date;
  endDate?: Date;
  studyDuration?: string;
  officialDocumentUrl?: string;
  financialSupport: FinancialSupportType;
  bankStatementUrl?: string;
  sponsorName?: string;
  sponsorOccupation?: string;
  sponsorIdNumber?: string;
  sponsorAddress?: string;
  sponsorPassportDataPageUrl?: string;
  sponsorBankStatementUrl?: string;

  status: VisaApplicationStatus;
  visaClassification?: string;
  visaControlNumber?: string;
  visaType:  VisaType;
  validity?: Date;
  issueDate?: Date;
  
  // If the visa is rejected, then display the fields below
  refusedDate?: Date;
  comments?: string // Comments on review for refusal
}