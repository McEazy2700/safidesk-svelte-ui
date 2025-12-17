import {
  customizedHelpdeskautomationRulesCreate,
  customizedHelpdeskautomationRulesUpdate,
  type CustomizedHelpdeskautomationRulesCreateData,
} from "$lib/services/api";
import { Toast } from "$lib/stores/toast.svelte";
import { getClientAccessToken } from "$lib/utils/cookies";
import { handleError } from "$lib/utils/errors";

class AutomationRuleMutationsBase {
  loading = $state(false);

  save = async (
    body: CustomizedHelpdeskautomationRulesCreateData["body"],
    id?: number,
  ) => {
    const tokens = getClientAccessToken();

    this.loading = true;
    let res = undefined;
    if (id) {
      res = await customizedHelpdeskautomationRulesUpdate({
        path: { id },
        body,
      });
    } else {
      res = await customizedHelpdeskautomationRulesCreate({
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
      Toast.append({ type: "success", message: "Automation Rule Created" });
      return res.data;
    }
    this.loading = false;
  };
}

export const AutomationRuleMutations = new AutomationRuleMutationsBase();
