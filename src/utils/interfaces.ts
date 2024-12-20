interface IDropOff {
    name: string;
    relationToChild: string
}
export type FileOrUrl = File | string;
export interface IEnrollChild {
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
    dropOffPersonOneName?: string;
    dropOffPersonOneRelationToChild?: string;
    dropOffPersonTwoName?: string;
    dropOffPersonTwoRelationToChild?: string;
    dropOffNames?: IDropOff[];
    programs: string[];
    dayCareSchedule?: string;
    hasAllergies: string;
    allergies?: string[]
    hasSpecialHealthConditions: string;
    specialHealthConditions?: string[];
    childPassport: FileOrUrl;
    parentPassport: FileOrUrl;
    emergencyContactPassport: FileOrUrl;
    pickPersonOnePassport: FileOrUrl;
    pickPersonTwoPassport: FileOrUrl;
    G6pdReport: FileOrUrl;
    vaccinations: FileOrUrl;
    
    photographUsageConsent: string

}