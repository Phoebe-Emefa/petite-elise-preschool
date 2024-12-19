interface IDropOff {
    name: string;
    relationToChild: string
}
export interface IEnrollChild {
    isChildAlreadyEnrolled: string;
    childName: string;
    childDOB: string;
    childAge: string;
    parentName: string;
    parentEmail: string;
    parentPhoneNumber: string;
    parentWhatsappNumber: string;
    address: string;
    emergencyContactName: string;
    emergencyContactPhoneNumber: string;
    emergencyContactWhatsappNumber: string;
    emergencyContactRelationshipToChild: string;
    dropChildOffSelf: string;
    dropOffNames: IDropOff[];
    hasAllergies: string;
    allergies?: string[]
    hasSpecialHealthConditions: string;
    specialHealthConditions?: string[];
    childPassport: string;
    parentPassport: string;
    emergencyContactPassport: string;
    pickPersonOnePassport?: string;
    pickPersonTwoPassport?: string;
    G6pdReport: string;
    vaccinations: string;
    photographUsageConsent: string

}