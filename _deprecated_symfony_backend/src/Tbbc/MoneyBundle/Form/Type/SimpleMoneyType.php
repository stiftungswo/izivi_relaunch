<?php

namespace Tbbc\MoneyBundle\Form\Type;

use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Tbbc\MoneyBundle\Form\DataTransformer\SimpleMoneyToArrayTransformer;
use Tbbc\MoneyBundle\Pair\PairManagerInterface;

/**
 * Form type for the Money object.
 */
class SimpleMoneyType
    extends MoneyType
{
    /** @var  PairManagerInterface */
    protected $pairManager;

    /** @var  int */
    protected $decimals;

    public function __construct(PairManagerInterface $pairManager, $decimals)
    {
        $this->pairManager = $pairManager;
        $this->decimals = (int)$decimals;
    }

    /**
     * @inheritdoc
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            //->add('tbbc_amount', new TextType())
            ->addViewTransformer(
                new SimpleMoneyToArrayTransformer($this->pairManager, $this->decimals)
            );
    }

	public function setDefaultOptions(OptionsResolverInterface $resolver)
	{
		$resolver->setDefaults(
			array(
				'csrf_protection' => false,
				'allow_extra_fields' => true,
				'compound' => false
			)
		);
	}

    /**
     * @inheritdoc
     */
    public function getName()
    {
        return 'tbbc_simple_money';
    }
}
