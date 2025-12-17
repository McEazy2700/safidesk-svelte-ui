import type { SlaPolicy } from "$lib/services/api";
import { getContext, setContext } from "svelte";

class SlaStateManager {
  edit = $state(false);
  current = $state({} as SlaPolicy);

  toggleEdit() {
    this.edit = !this.edit;
  }

  setCurrentPolicy(policy: SlaPolicy) {
    this.current = policy;
  }

  clearCurrent() {
    this.current = {} as SlaPolicy;
  }
}

const SLA_FORM_STATE_KEY = "$_sla_form_state";

export function getSlaFormState(key = SLA_FORM_STATE_KEY) {
  const manager = getContext<SlaStateManager>(key);
  if (!manager) {
    return setSlaState(key);
  }
  return manager;
}

export function setSlaState(key = SLA_FORM_STATE_KEY) {
  const stateManager = new SlaStateManager();
  return setContext(key, stateManager);
}
