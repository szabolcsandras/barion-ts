import NameInformationStructure from "./NameInformationStructure";

interface IUserInformation {
    Name?: NameInformationStructure;
    Email?: string;
}

/**
 * Represtents payee transaction included in a payment transaction
 */
export default class UserInformation {

    /**
     * Structure representing the name of the user.
     */
    Name: NameInformationStructure = new NameInformationStructure();

    /**
     * The e-mail address of the user.
     */
    Email: string = "";

    constructor(o?: IUserInformation | any) {
         if (o) {
            if (o.Name) {
                this.Name = new NameInformationStructure(o.Name);
            }
            this.Email = o.Email || "";
         }
     }
}