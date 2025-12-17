import type { AutomationRule } from "$lib/services/api";
import type { Action, Condition } from "$lib/types/automation-rule";
import { getContext, setContext } from "svelte";

type Rule = AutomationRule & {
  conditions: Condition[];
  actions: Action[];
};

class AutomationRuleStateManager {
  edit = $state(false);
  current = $state({} as Rule);

  toggleEdit() {
    this.edit = !this.edit;
  }

  setCurrentPolicy(rule: Rule) {
    this.current = rule;
  }

  clearCurrent() {
    this.current = {} as Rule;
  }
}

const AUTOMATION_RULE_FORM_STATE_KEY = "$_automation_rule_form_state";

export function getAutomationRuleFormState(
  key = AUTOMATION_RULE_FORM_STATE_KEY,
) {
  const manager = getContext<AutomationRuleStateManager>(key);
  if (!manager) {
    return setAutomationRuleFormState(key);
  }
  return manager;
}

export function setAutomationRuleFormState(
  key = AUTOMATION_RULE_FORM_STATE_KEY,
) {
  const stateManager = new AutomationRuleStateManager();
  return setContext(key, stateManager);
}
