import { ApiPropertyOptional, PickType } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { PageOptionsDto } from "../../common/dtos/page-options.dto";
import { DbUserHighlightReaction } from "../../user/entities/user-highlight-reaction.entity";

export class HighlightOptionsDto extends PageOptionsDto {
  @ApiPropertyOptional({
    description: "Highlight Repo Filter",
    example: "open-sauced/insights",
  })
  @IsString()
  @IsOptional()
  readonly repo?: string;
}

export class DbUserHighlightReactionResponse extends PickType(DbUserHighlightReaction, [
  "emoji_id",
  "reaction_count",
]) {}
