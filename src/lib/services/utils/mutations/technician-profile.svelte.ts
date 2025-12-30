import { invalidateAll } from "$app/navigation";
import {
  customizedHelpdesktechnicianProfilesCreate,
  customizedHelpdesktechnicianProfilesUpdate,
  type CustomizedHelpdesktechnicianProfilesCreateData,
} from "$lib/services/api";
import { Toast } from "$lib/stores/toast.svelte";
import { getClientAccessToken } from "$lib/utils/cookies";
import { handleError } from "$lib/utils/errors";

class TechnicianProfileMutationsBase {
  loading = $state(false);

  save = async (
    body: CustomizedHelpdesktechnicianProfilesCreateData["body"],
    id?: number,
  ) => {
    const tokens = getClientAccessToken();

    this.loading = true;
    let res = undefined;
    if (id) {
      res = await customizedHelpdesktechnicianProfilesUpdate({
        path: { id },
        body,
      });
    } else {
      res = await customizedHelpdesktechnicianProfilesCreate({
        headers: {
          Authorization: `Bearer ${tokens?.access}`,
        },
        body,
      });
    }
    if (res.error || !res.data) {
      handleError(res.error);
      this.loading = false;
    } else {
      console.log(res.data);
      Toast.append({ type: "success", message: "Technician Profile Saved" });
      return res.data;
    }
    this.loading = false;
    invalidateAll();
  };
}

export const TechnicianProfileMutations = new TechnicianProfileMutationsBase();
