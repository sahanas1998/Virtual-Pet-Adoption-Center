import React from "react";

function TermAndCondition() {
  return (
    <div className="py-[24px] lg:px-[24px] px-[16px] bg-black text-white">
      <div className="container mx-auto">
        <div className="flex flex-col gap-[24px]">
          <h3 className="text-[30px] text-center">Terms And Conditions</h3>
          <ul className="flex flex-col gap-[24px] text-[18px] list-disc list-inside">
            <li>
              <strong>Minimum Age Requirement:</strong>
              <p className="mt-2 ml-4">
                All adopters must be at least 18 years of age to ensure they are
                legally and financially capable of taking responsibility for a
                pet. Identification and proof of age may be required during the
                adoption process.
              </p>
            </li>
            <li>
              <strong>Safe and Loving Environment:</strong>
              <p className="mt-2 ml-4">
                The adopted pet must be provided with a safe, clean, and loving
                environment. This includes appropriate shelter, access to food
                and clean water, and freedom from neglect, abuse, or dangerous
                surroundings.
              </p>
            </li>
            <li>
              <strong>No Breeding or Resale:</strong>
              <p className="mt-2 ml-4">
                Adopted pets are intended to be family companions and not for
                resale, breeding, or commercial use. Any violation of this term
                may lead to legal action and the removal of the pet from the
                adopter’s custody.
              </p>
            </li>
            <li>
              <strong>Follow-Up Inspections:</strong>
              <p className="mt-2 ml-4">
                The shelter or organization reserves the right to conduct
                follow-up visits after the adoption to ensure the pet is being
                properly cared for. Cooperation with these visits is a
                requirement of the adoption agreement.
              </p>
            </li>
            <li>
              <strong>Medical Care Commitment:</strong>
              <p className="mt-2 ml-4">
                It is the adopter’s responsibility to provide ongoing veterinary
                care, including vaccinations, parasite control, and emergency
                treatment when needed. Neglecting a pet’s medical needs may
                result in intervention by animal welfare authorities.
              </p>
            </li>
            <li>
              <strong>Return Policy:</strong>
              <p className="mt-2 ml-4">
                If the adopter is no longer able to care for the pet, the pet
                must be returned to the shelter or adoption organization.
                Rehoming the pet through other means is not permitted without
                the shelter’s approval.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TermAndCondition;
