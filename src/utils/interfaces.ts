interface IDropOff {
    name: string;
    relationToChild: string
}

export type FileOrUrlArray = File[] | string[];
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
    childPassport: FileOrUrlArray;
    parentPassport: FileOrUrlArray;
    emergencyContactPassport: FileOrUrlArray;
    pickPersonOnePassport: FileOrUrlArray;
    pickPersonTwoPassport: FileOrUrlArray;
    G6pdReport: FileOrUrlArray;
    vaccinations: FileOrUrlArray;
    
    photographUsageConsent: string

}