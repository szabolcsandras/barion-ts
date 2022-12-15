
interface INameInformationStructure {
    LoginName?: string;
    FirstName?: string;
    LastName?: string;
    OrganizationName?: string;
}

/**
 * Represtents payee transaction included in a payment transaction
 */
export default class NameInformationStructure {

    /**
     * The login name of the user. At the moment
     * this is their e-mail address.
     */
    LoginName: string = "";

    /**
     * The first name of the user, if applicable.
     */
    FirstName: string = "";

    /**
     * The last name of the user, if applicable.
     */
    LastName: string = "";

    /**
     * The organization name of the user, if applicable.
     */
    OrganizationName: string = "";

    constructor(o?: INameInformationStructure | any) {
         if (o) {
            this.LoginName = o.LoginName || "";
            this.FirstName = o.FirstName || "";
            this.LastName = o.LastName || "";
            this.OrganizationName = o.OrganizationName || "";
         }
     }
}