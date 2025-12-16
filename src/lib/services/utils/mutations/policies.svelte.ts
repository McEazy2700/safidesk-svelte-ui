import {
  type SlaPolicyWritable,
  customizedHelpdeskslaPoliciesCreate,
  customizedHelpdeskslaPoliciesUpdate,
} from "$lib/services/api";
import { Toast } from "$lib/stores/toast.svelte";
import { getClientAccessToken } from "$lib/utils/cookies";
import { handleError } from "$lib/utils/errors";

class SlaPolicyMutationsBase {
  loading = $state(false);

  save = async (body: SlaPolicyWritable, id?: number) => {
    const tokens = getClientAccessToken();

    this.loading = true;
    let res = undefined;
    if (id) {
      res = await customizedHelpdeskslaPoliciesUpdate({ path: { id }, body });
    } else {
      res = await customizedHelpdeskslaPoliciesCreate({
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
      Toast.append({ type: "success", message: "Policy Created" });
      return res.data;
    }
    this.loading = false;
  };
}

export const SlaMutations = new SlaPolicyMutationsBase();
