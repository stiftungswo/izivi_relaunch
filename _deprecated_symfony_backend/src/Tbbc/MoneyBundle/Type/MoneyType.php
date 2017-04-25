<?php
/**
 * Created by Philippe Le Van.
 * Date: 02/07/13
 */
namespace Tbbc\MoneyBundle\Type;

use Money\Money;
use Money\Currency;
use Doctrine\DBAL\Types\ConversionException;
use Doctrine\DBAL\Types\Type;
use Doctrine\DBAL\Platforms\AbstractPlatform;

/**
 * Stores Money in a single field, in the smallest unit (cents). eg "EUR 100"
 * Note that this is only useful if you don't intend to query on this.
 *
 * @example
 */
class MoneyType extends Type
{
    const NAME = 'money';
 
    public function getSqlDeclaration(array $fieldDeclaration, AbstractPlatform $platform)
    {
        return $platform->getVarcharTypeDeclarationSQL($fieldDeclaration);
    }
 
    public function convertToPHPValue($value, AbstractPlatform $platform)
    {
        if (is_null($value) || empty($value)) {
            return null;
        }

	    if(is_numeric($value))
	    {
		    return Money::CHF($value);
	    }
 
        list($currency, $amount) = explode(' ', $value, 2);
 
        return new Money((int) $amount, new Currency($currency));
 
    }
 
    public function convertToDatabaseValue($value, AbstractPlatform $platform)
    {
        if (empty($value)) {
            return null;
        }
 
        if ($value instanceof Money) {
            return (string) $value->getCurrency() . ' '. $value->getAmount();
        }
 
        throw ConversionException::conversionFailed($value, self::NAME);
    }
 
    public function getName()
    {
        return self::NAME;
    }
}
