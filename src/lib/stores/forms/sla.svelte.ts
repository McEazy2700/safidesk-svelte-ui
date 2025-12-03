import type { PolicyType } from "$lib/types/policy";
import { getContext, setContext } from "svelte";

class SlaStateManager {
  edit = $state(false)
  currentPolicy = $state<PolicyType>()

  toggleEdit() {
    this.edit = !this.edit
  }

  setCurrentPolicy(policy: PolicyType) {
    this.currentPolicy = policy
  }
}


const SLA_FORM_STATE_KEY = "$_sla_form_state";

export function getSlaFormState(key = SLA_FORM_STATE_KEY) {
  const manager = getContext<SlaStateManager>(key);
  if (!manager) {
    return setAppNavState(key);
  }
  return manager;
}

export function setAppNavState(key = SLA_FORM_STATE_KEY) {
  const stateManager = new SlaStateManager();
  return setContext(key, stateManager);
}
