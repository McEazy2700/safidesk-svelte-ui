import {
  customizedHelpdeskautomationRulesList,
  type AutomationRule,
  type CustomizedHelpdeskautomationRulesListData,
} from "$lib/services/api";
import type { Action, Condition } from "$lib/types/automation-rule";
import { BaseListQueryStore } from "./base.svelte";

export const AutomationRulesStore = new BaseListQueryStore<
  AutomationRule & { conditions: Condition[]; actions: Action[] },
  CustomizedHelpdeskautomationRulesListData
>({
  fetchFn: customizedHelpdeskautomationRulesList,
  loadFn: (data) => data.data,
});
