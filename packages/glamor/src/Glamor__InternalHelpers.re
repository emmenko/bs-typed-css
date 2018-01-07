open Glamor__Core.Core;

module Value = {
  external pack : string => value(_) = "%identity";
  external unpack : value(_) => string = "%identity";
};

module Values = {
  external unpack : list(value(_)) => list(string) = "%identity";

  let join = vs =>
    vs |> unpack |> String.concat(", ") |> Value.pack;
};

module Declaration = {
  type t('a) = (string, value('a));

  external pack : t(_) => declaration = "%identity";
  external unpack : declaration => t(_) = "%identity";

};

module Declarations = {
  external unpack : list(declaration) => list(Declaration.t(_)) = "%identity";
  let toDict : list(declaration) => Js.Dict.t(value(_)) = declarations =>
    declarations |> unpack
                 |> Js.Dict.fromList;
};

module Selector = {
  external pack : ((string, Js.Dict.t(value(_)))) => declaration = "%identity";
  external unpack : declaration => ((string, Js.Dict.t(value(_)))) = "%identity";
};

