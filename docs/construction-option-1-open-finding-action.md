# Construction Decision — Open Finding Can Initiate Action

MMC adopts Option 1 for the current construction stage.

An `open` finding may initiate an operational action. Creating that action is the operational acknowledgement event. This avoids inventing an `acknowledged` value in the existing findings database status enum.

The application boundary therefore permits action creation from `open` and `acknowledged` findings. Action creation itself remains subject to the canonical action lifecycle and the persistence mapping contract.

No database schema change is required for this decision.
