import admin from "./modules/admin"
import signinAdmin from "./modules/signinAdmin"
import contacts from "./modules/contacts"
import menu from "./modules/menu"
import scroll from "./modules/scroll"
import repairModal from "./modules/plansRepairModal"
import mask from "./modules/mask"
import sendForm from "./modules/sendForm"
import formula from "./modules/formula"
import repairSlaider from "./modules/plansRepairSlaider"
import accordion from "./modules/accordion"
import privacyPolice from "./modules/privacyPolice"
import portfolioSlider from "./modules/sliderPortfolio"
import portfolioModal from "./modules/portfolioModal"
import comment from "./modules/sliderComment"
import openConsultation from "./modules/consultation"
import price from "./modules/price"
import transparency from "./modules/transparensy"

admin()
signinAdmin()
contacts()
menu()
scroll()
repairModal()
mask()
formula()
repairSlaider()
accordion()
privacyPolice()
portfolioSlider()
portfolioModal()
comment()
openConsultation()
price()
transparency()

sendForm({
    formId: 'feedback1',
    someElem: [
        {
            type: 'block',
            id: 'feedback-input1'
        }
    ]
}),
({
    formId: 'feedback2',
    someElem: [
        {
            type: 'block',
            id: 'feedback-input2'
        }
    ]
}),
({
    formId: 'feedback3',
    someElem: [
        {
            type: 'block',
            id: 'feedback-input3'
        }
    ]
}),
({
    formId: 'feedback4',
    someElem: [
        {
            type: 'block',
            id: 'feedback-input4'
        }
    ]
}),
({
    formId: 'feedback5',
    someElem: [
        {
            type: 'block',
            id: 'feedback-input5'
        }
    ]
});